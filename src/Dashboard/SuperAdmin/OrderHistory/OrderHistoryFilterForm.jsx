import React, { useState } from "react";

const OrderHistoryFilterForm = ({
  filters,
  date,
  setDate,
  errors,
  handleCheckbox,
  handleClearFilter,
  handleFilterOrders,
}) => {
  return (
    <div className="absolute top-[50px] right-[40px] bg-white shadow-lg p-5 z-[100] lg:w-[300px] rounded-2xl border border-gray-200">
      {/* Date Filter */}
      <div className="mb-5">
        <label className="block mb-2 text-gray-700 font-medium">তারিখ</label>
        <input
          type="date"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#ff6347]"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {errors && <p className="text-[12px] text-red-500">{errors}</p>}
      </div>

      {/* Status Filters */}
      <div className="space-y-3">
        <p className="text-gray-700 font-medium">অর্ডার স্ট্যাটাস</p>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.all}
            onChange={() => handleCheckbox("all")}
            className="h-4 w-4 text-[#ff6347] focus:ring-[#ff6347] border-gray-300 rounded"
          />
          <span className="text-gray-600">সকল</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.partially_accepted}
            onChange={() => handleCheckbox("partially_accepted")}
            className="h-4 w-4 text-[#ff6347] focus:ring-[#ff6347] border-gray-300 rounded"
          />
          <span className="text-gray-600">Partially Accepted</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.confirmed}
            onChange={() => handleCheckbox("confirmed")}
            className="h-4 w-4 text-[#ff6347] focus:ring-[#ff6347] border-gray-300 rounded"
          />
          <span className="text-gray-600">Confirmed</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.preparing}
            onChange={() => handleCheckbox("preparing")}
            className="h-4 w-4 text-[#ff6347] focus:ring-[#ff6347] border-gray-300 rounded"
          />
          <span className="text-gray-600">Preparing</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.out_for_delivery}
            onChange={() => handleCheckbox("out_for_delivery")}
            className="h-4 w-4 text-[#ff6347] focus:ring-[#ff6347] border-gray-300 rounded"
          />
          <span className="text-gray-600">Out For Delivery</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.delivered}
            onChange={() => handleCheckbox("delivered")}
            className="h-4 w-4 text-[#ff6347] focus:ring-[#ff6347] border-gray-300 rounded"
          />
          <span className="text-gray-600">Delivered</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.pending}
            onChange={() => handleCheckbox("pending")}
            className="h-4 w-4 text-[#ff6347] focus:ring-[#ff6347] border-gray-300 rounded"
          />
          <span className="text-gray-600">Pending</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.cancelled}
            onChange={() => handleCheckbox("cancelled")}
            className="h-4 w-4 text-[#ff6347] focus:ring-[#ff6347] border-gray-300 rounded"
          />
          <span className="text-gray-600">Cancelled</span>
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={() => handleClearFilter()}
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
        >
          Cancel
        </button>
        <button
          onClick={() => handleFilterOrders()}
          className="px-4 py-2 rounded-lg bg-[#ff6347] text-white hover:bg-[#e5533c] transition"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default OrderHistoryFilterForm;
