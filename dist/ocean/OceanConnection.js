"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OceanConnection = void 0;
const fs_1 = __importDefault(require("fs"));
class OceanConnection {
    //protected ocean: Ocean;
    constructor(config) {
        this.config = config;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * order(
             *   asset: string | DDO,
             *   serviceType: string,
             *   payerAddress: string,
             *   serviceIndex?: number | undefined,
             *   mpAddress?: string | undefined,
             *   consumerAddress?: string | undefined,
             *   userCustomParameters?: UserCustomParameters | undefined,
             *   authService?: string | undefined,
             *   searchPreviousOrders?: boolean | undefined
             * ): Promise<string>
             * Assets.download(
             *   asset: string | DDO,
             *   txId: string,
             *   tokenAddress: string,
             *   consumerAccount: Account,
             *   destination: string,
             *   index?: number | undefined,
             *   userCustomParameters?: UserCustomParameters | undefined
             * ): Promise<...>
             */
        });
    }
    download(req) {
        return __awaiter(this, void 0, void 0, function* () {
            //this.ocean.assets.order();
            //this.ocean.assets.download();
            let lines = "input1;input2;input3;input4;output1;output2\n" +
                "0.1;0.3;0.4;0.4;0.25;0.4\n" +
                "0.8;0.2;0.2;0.6;0.5;0.4\n" +
                "0.2;0.6;0.4;0.3;0.5;0.35\n" +
                "0.3;0.8;0.7;0.9;0.55;0.8\n" +
                "0.1;0.2;0.3;0.2;0.15;0.25\n" +
                "0.4;0.4;0.9;0.1;0.4;0.5\n" +
                "0.1;0.3;0.2;0.5;0.4;0.35\n" +
                "0.5;0.5;0.3;0.3;0.5;0.3\n" +
                "0.7;0.6;0.2;0.5;0.65;0.35";
            return new Promise((resolve, reject) => {
                fs_1.default.writeFile(req.destination + "dataset.csv", lines, function (err) {
                    if (err)
                        console.log(err);
                    resolve(lines);
                });
            });
        });
    }
}
exports.OceanConnection = OceanConnection;
//# sourceMappingURL=OceanConnection.js.map