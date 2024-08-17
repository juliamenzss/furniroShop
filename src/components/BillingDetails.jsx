function BillingDetails() {
    return (
        <section className="w-full max-w-md mx-auto">
      <table className="min-w-full text-left text-sm">
        <thead>
          <tr>
            <th className="px-6 py-3 font-semibold text-gray-900">Product</th>
            <th className="px-6 py-3 font-semibold text-gray-900 text-right">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4 text-gray-400">
              Asgaard sofa <span className="text-black">x 1</span>
            </td>
            <td className="px-6 py-4 text-right text-gray-900">
              Rs. 250,000.00
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 font-medium">Subtotal</td>
            <td className="px-6 py-4 text-right">
              Rs. 250,000.00
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 font-medium">Total</td>
            <td className="px-6 py-4 text-right text-gold-500 text-lg font-semibold">
              Rs. 250,000.00
            </td>
          </tr>
        </tbody>
      </table>
      <div className="px-5">
      <div className="w-96 mx-auto border-t opacity-20"></div>
      </div>

    </section>
    );
  }
  
  export { BillingDetails };
  