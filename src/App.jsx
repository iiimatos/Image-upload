import { UploadImageComponent } from "./components";

const App = () => {
  return (
    <section className="flex justify-center items-center flex-col bg-gray-100 h-screen">
      <UploadImageComponent />
      <footer className="text-slate-400 mt-10">
        Created by username{" "}
        <a
          href="https://github.com/iiimatos"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
        >
          iiimatos
        </a>{" "}
        - devchallenges.io
      </footer>
    </section>
  );
};

export default App;
