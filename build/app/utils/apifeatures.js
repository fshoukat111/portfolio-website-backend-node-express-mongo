"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiFeatures = void 0;
class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }
    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page || 1);
        const skip = resultPerPage * (currentPage - 1);
        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }
}
exports.ApiFeatures = ApiFeatures;
//# sourceMappingURL=apifeatures.js.map