"use client";
const ModelSelection = () => {
    return <div id="retina" className="flex items-center justify-center gap-2">
        <div className="relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <button
                className="relative flex w-full cursor-default flex-col rounded-md border border-black/10 bg-white py-2 pl-3 pr-10 text-left focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:border-white/20 dark:bg-gray-800 sm:text-sm align-center"
                id="headlessui-listbox-button-:r0:"
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
                data-headlessui-state=""
                aria-labelledby="headlessui-listbox-label-:r1: headlessui-listbox-button-:r0:"
            >
                <label
                    className="block text-xs text-gray-700 dark:text-gray-500 text-center"
                    id="headlessui-listbox-label-:r1:"
                    data-headlessui-state=""
                >
                    Model
                </label>
                <span className="inline-flex w-full truncate">
                    <span className="flex h-6 items-center gap-1 truncate text-white">
                        Default (GPT-3.5)
                    </span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 16 16"
                        className="h-4 w-4 text-gray-400"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                    </svg>
                </span>
            </button>
        </div>
    </div>;
};

export default ModelSelection;