const TableSection = () => {
  return (
    <section className="p-8 overflow-x-auto">
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-200">
            <td className="border p-2">A</td>
            <td className="border p-2">Dev</td>
            <td className="border p-2">Active</td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-200">
            <td className="border p-2">B</td>
            <td className="border p-2">Tester</td>
            <td className="border p-2">Inactive</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TableSection;
