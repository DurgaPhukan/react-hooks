import React, { useState, useTransition } from "react";

const UseTransitionComp = React.memo(() => {
    const [filter, setFilter] = useState("");
    const [filteredItems, setFilteredItems] = useState<string[]>([]);
    const [isPending, startTransition] = useTransition();
    const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFilter(value);

        startTransition(() => {
            const filtered = items.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredItems(filtered);
        });
    };

    return (
        <div className="flex justify-center flex-col items-center p-4 gap-4 rounded-lg h-72">
            <h1 className="text-2xl text-green-900 font-bold">React useTransition Example</h1>
            <input
                type="text"
                value={filter}
                onChange={handleFilterChange}
                placeholder="Filter items"
                className="border-1 rounded-md px-2 py-1 text-green-900"
            />

            {isPending && <div className="overflow-auto min-w-40 h-40 bg-green-400 flex flex-wrap gap-2 p-2 rounded-lg justify-center">
                <h1 className="text-white font-bold">
                    loading...
                </h1>
            </div>}
            {!isPending && <div className="">

                <div className="overflow-auto min-w-40 h-40 bg-green-400 flex flex-wrap gap-2 p-2 rounded-lg justify-center">
                    {filteredItems.map((item) => (
                        <div className="text-green-700 font-medium bg-white p-2 rounded-md w-36 h-10 text-center" key={item}>{item}</div>
                    ))}
                    {filteredItems.length === 0 && <h1 className="text-white font-bold">
                        No Item Found!
                    </h1>}
                </div>
            </div>}
        </div>
    );
});

export default UseTransitionComp;
