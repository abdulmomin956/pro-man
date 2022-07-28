import React from 'react';
import img1 from '../../images/categories/business.svg'
import img2 from '../../images/categories/design.svg'
import img3 from '../../images/categories/education.svg'


const Template = () => {
    const categories = [
        {
            id: 1,
            title: "bussiness",
            img: img1
        },
        {
            id: 2,
            title: "design",
            img: img2
        },
        {
            id: 3,
            title: "education",
            img: img3
        },
        {
            id: 4,
            title: "engineering",
            img: img1
        },
        {
            id: 5,
            title: "marketing",
            img: img2
        },
        {
            id: 6,
            title: "remote work",
            img: img3
        },
    ];
    const popularTemplates = [
        {
            _id: 1,
            title: "Project Management",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT120qIDJDmhe8BNjc4tdgURzvtudzpaCJtJw&usqp=CAU",
        },
        {
            _id: 2,
            title: "Project Management",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpPskxzYMDQzouodNrKlHQ8oFCwrFpwKzZA&usqp=CAU",
        },
        {
            _id: 3,
            title: "Project Management",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT120qIDJDmhe8BNjc4tdgURzvtudzpaCJtJw&usqp=CAU",
        },
        {
            _id: 4,
            title: "Project Management",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpPskxzYMDQzouodNrKlHQ8oFCwrFpwKzZA&usqp=CAU",
        },
        {
            _id: 5,
            title: "Project Management",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT120qIDJDmhe8BNjc4tdgURzvtudzpaCJtJw&usqp=CAU",
        },
        {
            _id: 6,
            title: "Project Management",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpPskxzYMDQzouodNrKlHQ8oFCwrFpwKzZA&usqp=CAU",
        },
        {
            _id: 7,
            title: "Project Management",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT120qIDJDmhe8BNjc4tdgURzvtudzpaCJtJw&usqp=CAU",
        },
        {
            _id: 8,
            title: "Project Management",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpPskxzYMDQzouodNrKlHQ8oFCwrFpwKzZA&usqp=CAU",
        },
        {
            _id: 9,
            title: "Project Management",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT120qIDJDmhe8BNjc4tdgURzvtudzpaCJtJw&usqp=CAU",
        },
        {
            _id: 10,
            title: "Project Management",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT120qIDJDmhe8BNjc4tdgURzvtudzpaCJtJw&usqp=CAU",
        },
    ];
    return (
        <div className="px-4">
            {/* This Board pages showing when enter to the site */}
            <h2 className="text-2xl font-medium my-6">
                <span className="flex items-center text-gray-700">
                    Featured categories</span>
            </h2>
            {/* **Featured categories start here** */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 ">

                {categories.map((template, i) => (
                    <div
                        key={i}
                        className="align-middle"
                        style={{
                            height: "100px",
                            maxWidth: "100px",
                            borderRadius: "5px"
                        }}
                    >

                        <img src={template.img} alt="" />
                        <p className="text-base font-bold ">{template.title.charAt(0).toUpperCase() + template.title.slice(1)} </p>
                    </div>
                ))}
            </div>
            {/* **Most popular template section End here** */}



            {/* **Your Workspace section start here** */}
            <h2 className="text-2xl font-medium my-6">
                <span className="flex items-center text-gray-700">
                    New and notable templates</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">

                {popularTemplates.map((template, i) => (
                    <div
                        key={i}
                        className="align-middle"
                        style={{
                            height: "100px",
                            maxWidth: "180px",
                            borderRadius: "5px",
                            backgroundSize: "cover",
                            backgroundImage: `url(${template.img})`,
                        }}
                    >

                        <div>
                            <button className="btn btn-xs btn-accent m-3">TEMPLATE</button>
                        </div>
                        <p className="text-base font-bold text-white ">{template.title} </p>
                    </div>
                ))}
            </div>



            {/* **Your Workspace section End here** */}
        </div>



    );
};

export default Template;