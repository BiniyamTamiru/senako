// app/page.tsx
import Header from "../components/Header";
import Feed from "../components/Feed"; // <-- NO curly braces!

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Feed />
    </div>
  );
}