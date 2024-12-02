export default function IncidentReport() {
  return (
    <div>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase">
              Report ID
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase">
              Category
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase">
              Details
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase">
              Status
            </th>
            <th className="px-6 py-3 text-sm font-semibold text-gray-700 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">123</td>
            <td className="px-6 py-4 text-sm text-gray-700">Network Error</td>
            <td className="px-6 py-4 text-sm text-gray-600">
              There is a blach blach blah
            </td>
            <td className="px-6 py-4 text-sm text-green-600">Finish</td>
            <td className="px-6 py-4 text-sm">
              <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
                Edit
              </button>
              <button className="text-red-500 hover:text-red-700 focus:outline-none ml-4">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
