import React from "react";

interface CouponProps {
  couponCode: string;
  setCouponCode: React.Dispatch<React.SetStateAction<string>>;
  handleCoupon: () => void;
}

const CouponSection = ({
  couponCode,
  setCouponCode,
  handleCoupon,
}: CouponProps) => {
  return (
    <div className="space-y-2">
      <h3 className="font-medium">Apply Coupon</h3>
      <div className="flex gap-2">
        <input
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="flex-1"
        />
        <button type="submit" onClick={handleCoupon}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default CouponSection;
