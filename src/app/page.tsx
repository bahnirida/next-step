// src/app/page.tsx
export default function Home() {
  return (
      <div className="p-10">
        <h1 className="text-4xl font-bold text-primary-600 mb-4">
          Welcome to Your Study Abroad Agency
        </h1>
        <p className="text-lg text-neutral-700 mb-6">
          Helping students achieve their global dreams.
        </p>
        <button className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-6 rounded-lg transition">
          Book Free Consultation
        </button>
      </div>
  );
}