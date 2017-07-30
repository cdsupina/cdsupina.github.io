import { Injectable } from '@angular/core';
import { Project } from '../models/project';

const projectsPromise: Promise<Project[]> = Promise.resolve([
    {
    projectName: 'wifirover',
    name: 'Wifi Rover',
    description: 'Rover that can be controlled over a local network.',
    image: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/411/137/datas/medium.jpg',
    hasPartsList: true,
    collab: false,
    collaborators: []

},
    {
    projectName: 'telememe',
    name: 'Telememe',
    description: 'Teletubby that can give meme advice.',
    image: 'https://firefly-challengepost.netdna-ssl.com/usercontent/fill/333/222/cGhvdG9zL3Byb2R1Y3Rpb24vc29mdHdhcmVfdGh1bWJuYWlsX3Bob3Rvcy8wMDAvMzc2LzUwMy9kYXRhcy9vcmlnaW5hbC5qcGVn/image.jpeg?signature=061e8001d9357a180b3fd057a02f6165f536f669',
    hasPartsList: false,
    collab: true,
    collaborators: ['Mohsin Haider', 'Kelvin Fichter']
},
    {
    projectName: 'starcoin',
    name: 'Starcoin',
    description: 'Dapp for incentivizing honest reviews.',
    image: 'https://firefly-challengepost.netdna-ssl.com/usercontent/fill/333/222/cGhvdG9zL3Byb2R1Y3Rpb24vc29mdHdhcmVfdGh1bWJuYWlsX3Bob3Rvcy8wMDAvNTIxLzY4MC9kYXRhcy9vcmlnaW5hbC5wbmc=/Screen_Shot_2017-07-23_at_12.00.04_PM.png?signature=bc007061e90fb70b25de2ea2d51a1969b02a9cde',
    hasPartsList: false,
    collab: true,
    collaborators: ['Sid Vashist', 'Varoon Pazhyanur', 'Siddarth Ramesh', 'Patrick Guay', 'Leland Lee']
},
    {
    projectName: 'killacalorie',
    name: 'Kill-a-Calorie',
    description: 'App that can tell what you are eating.',
    image: 'https://firefly-challengepost.netdna-ssl.com/usercontent/fill/333/222/cGhvdG9zL3Byb2R1Y3Rpb24vc29mdHdhcmVfdGh1bWJuYWlsX3Bob3Rvcy8wMDAvNDY3Lzc4OS9kYXRhcy9vcmlnaW5hbC5qcGc=/kill-a-calorie.jpg?signature=66ddc24258a11869e3568a4f64b996e1296938ef',
    hasPartsList: false,
    collab: true,
    collaborators: ['Richard Ju', 'JaeYeon Kim']
}
])

@Injectable()
export class ProjectService{

    getProjects(){
        return projectsPromise;
    }

    getProject(projectName){
        return projectsPromise.then(projects => projects.find(project => project.projectName === projectName));
    }
}

