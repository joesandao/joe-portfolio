import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ContactTable from "@/components/contact/ContactTable";

export default function TopPage() {
  return (
    <div>
      <Navbar />
      <main className="h-screen text-center flex flex-col justify-center">
        <ContactTable />
      </main>
      <Footer />
    </div>
  );
}