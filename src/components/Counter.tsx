
function Counter({ active, count, callback }: { active: boolean, count: number, callback: () => void }) {

    const color = active ? "bg-green-500" : "bg-white hover:outline hover:outline-2 hover:outline-gray-300";
    return <div onClick={callback} className={`w-16 h-16 justify-center items-center flex rounded-full cursor-pointer ${color}`}>
        {count}
    </div>
}

export default Counter;