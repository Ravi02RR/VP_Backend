class ApiResponse {
    constructor(statusCode, message, data = "Sucess") {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.sucess = statusCode < 400;
    }
}
export { ApiResponse }