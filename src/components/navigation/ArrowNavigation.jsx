import { useLocation, useNavigate } from "react-router-dom";
import { topics } from "../../utils/topicOrder";

export default function ArrowNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentIndex = topics.indexOf(location.pathname);

  const goNext = () => {
    if (currentIndex < topics.length - 1) {
      navigate(topics[currentIndex + 1]);
    }
  };

  const goBack = () => {
    if (currentIndex > 0) {
      navigate(topics[currentIndex - 1]);
    }
  };

  return (
    <div className="flex justify-between items-center mt-10">
      {/* Back Arrow */}
      <button
        onClick={goBack}
        disabled={currentIndex === 0}
        className={`text-3xl px-4 py-2 rounded 
          ${currentIndex === 0
            ? "text-gray-300 cursor-not-allowed"
            : "text-indigo-600 hover:bg-indigo-100"}
        `}
      >
        ⬅️
      </button>

      {/* Topic Counter */}
      <p className="text-sm text-gray-500">
        Topic {currentIndex + 1} of {topics.length}
      </p>

      {/* Forward Arrow */}
      <button
        onClick={goNext}
        disabled={currentIndex === topics.length - 1}
        className={`text-3xl px-4 py-2 rounded 
          ${currentIndex === topics.length - 1
            ? "text-gray-300 cursor-not-allowed"
            : "text-indigo-600 hover:bg-indigo-100"}
        `}
      >
        ➡️
      </button>
    </div>
  );
}
