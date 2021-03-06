import {Type} from "@tsed/core";
import {InjectorService} from "../../di/services/InjectorService";
import {IInterceptor} from "../interfaces/IInterceptor";

/**
 * Attaches interceptor to method call and executes the before and after methods
 *
 * @param interceptor
 * @param options
 * @decorator
 */
export function Intercept<T extends IInterceptor>(interceptor: Type<T>, options?: any): Function {
    return (target: any, method: string, descriptor: PropertyDescriptor) => {
        const original = descriptor.value;

        descriptor.value = function (...args: any[]) {
            if (InjectorService.has(interceptor)) {
                const instance = InjectorService.get<IInterceptor>(interceptor);

                return instance
                    .aroundInvoke({
                        target,
                        method,
                        args,
                        proceed: (err?: Error) => {
                            if (!err) {
                                return original.apply(target, args);
                            }

                            throw err;
                        }
                    }, options);
            }

            return original.apply(target, args);
        };

        return descriptor;
    };
}
