// components/TriangleDiv.js
// components/TriangleDiv.js
export default function TriangleDiv() {
  return (
    <div className="relative bg-gray-200 h-64 w-full">
      {/* Triangle positioned at the bottom-right */}
      <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[50px] border-r-[50px] border-t-transparent border-r-green-500" />
      <p className="p-4">Your content here</p>
    </div>
  );
}
