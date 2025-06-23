interface ProgressCircleProps {
    completionPercentage: number
}

//TODO: Impolement Porgress Circle and put these colors in globals.css
export default function ProgressCircle({completionPercentage}: ProgressCircleProps){
    const getColor = () => {
        if (completionPercentage > 69) return 'text-green-600'
        else if (completionPercentage > 30) return 'text-yellow-500'
        else return 'red'
    }
    const color = getColor();
    return <div>{color}</div>
}