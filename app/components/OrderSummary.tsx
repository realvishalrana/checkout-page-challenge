import type { ProductType } from "~/types";
import CouponSection from "./CouponSection";
import { useState } from "react";

type OrderSummaryProps = {
  productList: ProductType[];
};

const OrderSummary = ({ productList }: OrderSummaryProps) => {
  const [couponCode, setCouponCode] = useState("");
  const [couponPercentage, setCouponPercentage] = useState(0);

  const subtotal = productList.reduce(
    (sum, product) => sum + product.totalPrice,
    0
  );

  const getDiscountPercentage = (subtotal: number) => {
    if (subtotal >= 10000) return 20;
    if (subtotal >= 5000) return 10;
    if (subtotal >= 2000) return 5;
    return 0;
  };

  const tierDiscountPercentage = getDiscountPercentage(subtotal);
  const effectivePercentage = couponPercentage || tierDiscountPercentage;
  const effectiveDiscount = subtotal * (effectivePercentage / 100);
  const total = subtotal - effectiveDiscount;

  const handleCoupon = () => {
    if (subtotal >= 2000 && couponCode === "30OFF") {
      setCouponPercentage(30);
      alert("Coupon applied successfully!");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-gray-700">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      {subtotal >= 2000 && (
        <div className="flex justify-between text-gray-700">
          <span>Discount {effectivePercentage}%</span>
          <span>- ${effectiveDiscount.toFixed(2)}</span>
        </div>
      )}
      <div className="flex justify-between font-medium text-lg pt-4 border-t mt-4">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <CouponSection
        couponCode={couponCode}
        setCouponCode={setCouponCode}
        handleCoupon={handleCoupon}
      />
    </div>
  );
};

export default OrderSummary;
