import {Provider} from "../../di/class/Provider";
import {ProviderType, TypedProvidersRegistry} from "../../di/interfaces";
import {GlobalProviders} from "../../di/registries/ProviderRegistry";

/**
 *
 * @type {Registry<Provider<any>, IProvider<any>>}
 */
export const InterceptorRegistry: TypedProvidersRegistry = GlobalProviders.createRegistry(ProviderType.INTERCEPTOR, Provider, {
    injectable: true,
    buildable: true
});
/**
 * Add a new interceptor in the `ProviderRegistry`. This interceptor will be built when `InjectorService` will be loaded.
 *
 * #### Example
 *
 * ```typescript
 * import {registerInterceptor, InjectorService} from "@tsed/common";
 *
 * export default class MyInterceptor {
 *     constructor(){}
 *     aroundInvoke() {
 *         return "test";
 *     }
 * }
 *
 * registerInterceptor({provide: MyInterceptor});
 * // or
 * registerInterceptor(MyInterceptor);
 *
 * InjectorService.load();
 *
 * const myInterceptor = InjectorService.get<MyInterceptor>(MyInterceptor);
 * myInterceptor.aroundInvoke(); // test
 * ```
 *
 * @param provider Provider configuration.
 */
export const registerInterceptor = GlobalProviders.createRegisterFn(ProviderType.INTERCEPTOR);