export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#f6f6f6] px-8 py-10">
      <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#414042]">
        <p>Copyright &copy; {new Date().getFullYear()} Rengana Business &amp; Commercial Services</p>
        <p>Powered by Real Estate</p>
      </div>
    </footer>
  );
}
