import Layout from "../layout/layout";
import { useSelector } from "react-redux";

export default function TaskPage() {
  const user = useSelector((state) => state.auth?.data);

  return (
    <Layout>
      <div className="min-h-[80vh] px-4 py-8 bg-gradient-to-br from-emerald-50 to-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-teal-700 mb-1">
                Your Tasks
              </h1>
              <p className="text-gray-600 text-sm">
                Welcome{user?.firstName ? `, ${user.firstName}` : ""}! Track and manage your tasks efficiently.
              </p>
            </div>

            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md shadow-md transition-all font-medium">
              + Add Task
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Example Task Card */}
            {[1, 2, 3, 4].map((task, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg p-5 border-t-4 border-teal-400 transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Task Title {task}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quae?
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Due: 2025-07-20</span>
                  <span className="bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-md text-xs font-semibold">
                    In Progress
                  </span>
                  <span className="bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-md text-xs font-semibold">
                    High
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
