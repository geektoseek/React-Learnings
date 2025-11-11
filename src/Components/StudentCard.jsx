import React from 'react'

const StudentCard = (props) => {
    return (
        <main>
            {props.StudentList.map((student, index) => {
                let bgColor = 'bg-gray-400';
                if (student.Grade === 'A') bgColor = "bg-green-800";
                else if (student.Grade === 'B') bgColor = 'bg-green-200';
                else if (student.Grade === 'C') bgColor = 'bg-yellow-600';
                else if (student.Grade === 'D') bgColor = 'bg-yellow-200';
                else if (student.Grade === 'E') bgColor = 'bg-red-200';


                return (
                    <main key={index} className={`${bgColor} border-2 border-black rounded-lg m-4 p-4`}>
                        <h1 className='text-2xl font-bold text-white '>Name: {student.Names}</h1>
                        <h1 className='text-xl'>Age: {student.Age}</h1>
                        <h1 className='text-xl'>Course: {student.Course}</h1>
                        <h1 className='text-xl'>Batch: {student.Batch}</h1>
                    </main>
                )
            })}
        </main>
    )
}

export default StudentCard