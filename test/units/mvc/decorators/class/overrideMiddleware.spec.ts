import {OverrideProvider} from "../../../../../src/common/di/decorators/overrideProvider";
import {OverrideMiddleware} from "../../../../../src/common/mvc/decorators/class/overrideMiddleware";
import {expect} from "../../../../tools";


class Test {

}

class MiddlewareTest {

}

describe("OverrideMiddleware", () => {
    it("should use OverrideProvider", () => {
        expect(OverrideMiddleware).to.eq(OverrideProvider);
    });

});