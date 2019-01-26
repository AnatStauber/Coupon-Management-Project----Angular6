export class Coupon {
    public constructor(
        public couponId?: number,
        public couponTitle?: string,
        public couponStartDate?: string,
        public couponEndDate?: string,
        public couponAmount?: string,
        public type?: string,
        public couponMessage?: string,
        public couponPrice?: string,
        public couponImage?: object,
        public comapnyId?: number,
        public couponStatus?: string
 ) { }
}
