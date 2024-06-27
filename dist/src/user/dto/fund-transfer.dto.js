"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundTransferDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class FundTransferDTO {
}
exports.FundTransferDTO = FundTransferDTO;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], FundTransferDTO.prototype, "sender", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], FundTransferDTO.prototype, "receiver", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({
        allowInfinity: false,
        allowNaN: false,
        maxDecimalPlaces: 0,
    }),
    (0, class_validator_1.Min)(10),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], FundTransferDTO.prototype, "fund", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(10),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FundTransferDTO.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FundTransferDTO.prototype, "remarks", void 0);
//# sourceMappingURL=fund-transfer.dto.js.map