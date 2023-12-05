const Loading = () => {
    return (
        <div className="min-h-screen flex gap-1 items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-500 border-solid"></div>
            <p className="text-indigo-500 mt-4 text-xl font-semibold">Loading...</p>
        </div>
    );
};

export default Loading;