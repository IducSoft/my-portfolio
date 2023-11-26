import React from 'react';
import repository from "../../assets/carpeta.png";
import linkToSite from "../../assets/cadena.png";

const CardRepoItem = ({repo}) => {

    console.log(repo)

    return (
        <div className="h-[100%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
            <div className="p-5 h-[100%] flex flex-col justify-between">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {repo.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                </div>
                
                <div className='w-[100%] flex justify-between align-bottom'>
                    <a href={repo.html_url} target='_blank' rel='noreferrer' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bluePrimary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Repository
                        <img src={repository} alt='repository' className='w-[1.5rem] ml-2' />
                    </a>

                    <a href={repo.homepage} target='_blank' rel='noreferrer' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Link
                        <img src={linkToSite} alt='link' className='w-[1.5rem] ml-2' />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default CardRepoItem;