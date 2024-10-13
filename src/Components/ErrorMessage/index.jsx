function ErrorMessage({
  message = "An error occurred. Please try again or contact our IT department.",
  className = "",
}) {
  return (
    <div
      className={`bg-red-600 text-xl p-4 rounded-md text-white ${className}`}
    >
      {message}
    </div>
  );
}

export default ErrorMessage;
