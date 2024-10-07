function ErrorMessage({ message = "An error occurred.", className = "" }) {
  return (
    <div
      className={`bg-red-600 text-xl p-4 rounded-md text-white ${className}`}
    >
      {message}
    </div>
  );
}

export default ErrorMessage;
