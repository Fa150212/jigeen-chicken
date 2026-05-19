import Sidebar from "../components/Sidebar";

import Navbar from "../components/DashboardNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex min-h-screen bg-[#f5f7f9]">

      {/* SIDEBAR */}

      <div className="fixed left-0 top-0 h-screen z-50">
        <Sidebar />
      </div>

      {/* MAIN */}

      <div className="flex-1 ml-[300px] flex flex-col">

        {/* NAVBAR */}

        <Navbar />

        {/* CONTENT */}

        <main className="p-8 flex-1">
          {children}
        </main>

      </div>

    </div>
  );
}