import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// const routes = {
//   quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`
// };

// export interface RandomQuoteContext {
//   // The quote's category: 'dev', 'explicit'...
//   category: string;
// }



@Injectable()
export class ProjectListService {

    // projects = [];
    projects: Array<object> = [];

    constructor(private httpClient: HttpClient) {
        const viewLiveText = 'View Live';

        this.projects.push({
            title: 'Ascend Hotels',
            frontBody: 'frontbody',
            backBody: 'Updated publicly facing website to a responsive design.',
            image: 'assets/webstack-projects/medium/webstack-project-ascend.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-ascend.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'https://www.choicehotels.com/ascend',
            target: '_blank',
            role: 'Full Stack - LAMP',
            tech: ['PHP', 'MySQL', 'CSS2/3', 'JavaScript'],
            details: 'Created and maintained a custom sales force on-demand material system.'
        });
        this.projects.push({
            title: 'Amano Multi-tenant Dashboard',
            frontBody: 'frontbody',
            backBody: 'Responsive design, drag/drop widgets, using Bootstrap and Angular.',
            image: 'assets/webstack-projects/medium/a-amano.jpg',
            largeImage: 'assets/webstack-projects/large/a-amano.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'https://www.amanomcgann.com/Page/Index/Home',
            target: '_blank',
            role: 'Full Stack - .NET',
            tech: ['Angular', 'HTML', 'CSS2/3', 'JavaScript', 'Azure SQL', 'Azure API', 'Azure AD'],
            details: 'Created cloud-based multi-tenant system with cusomizable dashboards.'
        });
        this.projects.push({
            title: 'Baby Genius',
            frontBody: 'frontbody',
            backBody: 'Created JibJab-style kids games with customizable faces.',
            image: 'assets/webstack-projects/medium/webstack-project-baby-genius.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-baby-genius.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'https://www.babygenius.com',
            target: '_blank',
            role: 'Full Stack - LAMP',
            tech: ['Zend Framework', 'Flash/ActionScript', 'GroupOn API', 'PHP', 'MySQL', 'CSS2/3', 'JavaScript'],
            details: 'Created Groupon API\'s and web platform to manage fulfillment of Majento and Groupon orders.'
        });
        this.projects.push({
            title: 'Cisco',
            frontBody: 'frontbody',
            backBody: 'Created rapid prototype and R&D modules for offshore team. Created e-learning content.',
            image: 'assets/webstack-projects/medium/webstack-project-cisco.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-cisco.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'https://www.cisco.com',
            target: '_blank',
            role: 'Front-End / BA / R&D',
            tech: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
            details: 'BA duties, created business requirement documents working with stakeholders, PM\'s, and IT.'
        });
        this.projects.push({
            title: 'Creative Memories',
            frontBody: 'frontbody',
            backBody: 'Created customizable online photo albums for public use.',
            image: 'assets/webstack-projects/medium/webstack-project-creative-memories.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-creative-memories.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'http://www.creativememories.com',
            target: '_blank',
            role: 'Multimedia / Front-End',
            tech: ['Flash/ActionScript', 'HTML', 'CSS'],
            details: 'Custom data collected was used to print and ship albums. Shutterfly before there was Shutterfly.'
        });
        this.projects.push({
            title: 'Econolodge',
            frontBody: 'frontbody',
            backBody: 'Updated publicly facing website to a responsive design.',
            image: 'assets/webstack-projects/medium/webstack-project-econolodge.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-econolodge.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'https://www.choicehotels.com/econo-lodge',
            target: '_blank',
            role: 'Full Stack - LAMP',
            tech: ['PHP', 'MySQL', 'CSS2/3', 'JavaScript'],
            details: 'Created and maintained a custom sales force on-demand material system.'
        });
        this.projects.push({
            title: 'GEM Electric Vehicle',
            frontBody: 'frontbody',
            backBody: 'GEM was the first project Polaris allowed me to use Bootstrap & modern frameworks.',
            image: 'assets/webstack-projects/medium/webstack-project-gem.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-gem.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'https://gem.polaris.com/en-us',
            target: '_blank',
            role: 'Full Stack - .NET',
            tech: ['KnockoutJS', 'Angular JS', 'HTML5', 'CSS3', 'Bootstrap', 'SQL', 'API'],
            details: 'After a huge success, the GEM approach was adobpted for all sites under the Polaris umbrella.'
        });
        this.projects.push({
            title: 'Indian Motorcycle',
            frontBody: 'frontbody',
            backBody: 'Indian Motorcycle was a huge launch, timed with live events in Sturgis. ',
            image: 'assets/webstack-projects/medium/webstack-project-indian-motorcycle.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-indian-motorcycle.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'https://www.indianmotorcycle.com/en-us',
            target: '_blank',
            role: 'Full Stack - .NET',
            tech: ['KnockoutJS', 'LiquidPixels', 'Angular JS', 'HTML5', 'CSS3', 'Bootstrap', 'SQL', 'API'],
            details: 'Created tiled, load on-demand product zoom/pan viewer for extremely high resolution images.'
        });
        this.projects.push({
            title: 'In-Fisherman',
            frontBody: 'frontbody',
            backBody: 'Created multimedia magizine designer with client-side photo cropping and photo upload.',
            image: 'assets/webstack-projects/medium/webstack-project-in-fisherman.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-in-fisherman.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'http://www.in-fisherman.com',
            target: '_blank',
            role: 'Full Stack - LAMP',
            tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
            details: 'details'
        });
        this.projects.push({
            title: 'ING Bank',
            frontBody: 'frontbody',
            backBody: 'Created e-learning content for use in ING\'s Learning Management System. ',
            image: 'assets/webstack-projects/medium/webstack-project-ing-bank.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-ing-bank.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'https://www.ing.com',
            target: '_blank',
            role: 'Front-End, e-Learning',
            tech: ['JavaScript', 'HTML', 'CSS', 'e-Learning', 'AICC/SCORM', 'Authorware', 'Flash', 'ActionScript'],
            details: 'Interoperability was achieved by following AICC/SCORM standards to track learner progress/status.'
        });
        this.projects.push({
            title: 'MainStay Hotels',
            frontBody: 'frontbody',
            backBody: 'Updated publicly facing website to a responsive design.',
            image: 'assets/webstack-projects/medium/webstack-project-mainstay.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-mainstay.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'https://www.choicehotels.com/mainstay',
            target: '_blank',
            role: 'Full Stack - LAMP',
            tech: ['PHP', 'MySQL', 'CSS2/3', 'JavaScript'],
            details: 'Created and maintained a custom sales force on-demand material system.'
        });
        this.projects.push({
            title: 'North American Whitetail',
            frontBody: 'frontbody',
            backBody: 'Created multimedia magizine designer with client-side photo cropping and photo upload.',
            image: 'assets/webstack-projects/medium/webstack-project-north-american-whitetail.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-north-american-whitetail.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'http://www.northamericanwhitetail.com',
            target: '_blank',
            role: 'Front-End',
            tech: ['HTML', 'CSS', 'JavaScript', 'Multimedia'],
            details: 'details'
        });
        this.projects.push({
            title: 'Polaris',
            frontBody: 'frontbody',
            backBody: 'Maintained legacy ASP.NET platform and made enhancements for first summer launch.',
            image: 'assets/webstack-projects/medium/webstack-project-polaris.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-polaris.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'http://www.polaris.com/en-us',
            target: '_blank',
            role: 'Full Stack - .NET',
            tech: ['KnockoutJS', 'Angular JS', 'HTML5', 'CSS3', 'Bootstrap', 'SQL', 'API'],
            details: 'Worked with a small team to create from scratch, a new MVC C# platform with shared code base.'
        });
        this.projects.push({
            title: 'Power',
            frontBody: 'frontbody',
            backBody: 'backbody',
            image: 'assets/webstack-projects/medium/webstack-project-polaris-power.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-polaris-power.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'http://www.polaris.com/en-us/generators',
            target: '_blank',
            role: 'Full Stack - .NET',
            tech: ['KnockoutJS', 'Angular JS', 'HTML5', 'CSS3', 'Bootstrap', 'SQL', 'API'],
            details: 'Worked with a small team to create from scratch, a new MVC C# platform with shared code base.'
        });
        this.projects.push({
            title: 'Rodeway Inn',
            frontBody: 'frontbody',
            backBody: 'Updated publicly facing website to a responsive design.',
            image: 'assets/webstack-projects/medium/webstack-project-rodeway.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-rodeway.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'https://www.choicehotels.com/rodeway-inn',
            target: '_blank',
            role: 'Full Stack - LAMP',
            tech: ['PHP', 'MySQL', 'CSS2/3', 'JavaScript'],
            details: 'Created and maintained a custom sales force on-demand material system.'
        });
        this.projects.push({
            title: 'Schwan\'s',
            frontBody: 'frontbody',
            backBody: 'Managed LMS department, managed 5 director reports providing mentoring and training.',
            image: 'assets/webstack-projects/medium/webstack-project-schwans.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-schwans.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'https://www.schwans.com',
            target: '_blank',
            role: 'Manager of LMS Department',
            tech: ['HTML', 'CSS', 'Flex', 'FlashBuilder', 'AICC/SCORM', 'JavaScript'],
            details: 'Created custom e-learning content for the Schwan enterprise LMS, SumTotal.'
        });
        this.projects.push({
            title: 'Sleep Inn',
            frontBody: 'frontbody',
            backBody: 'Updated publicly facing website to a responsive design.',
            image: 'assets/webstack-projects/medium/webstack-project-sleep-inn.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-sleep-inn.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'https://www.choicehotels.com/sleep-inn',
            target: '_blank',
            role: 'Full Stack - LAMP',
            tech: ['PHP', 'MySQL', 'CSS2/3', 'JavaScript'],
            details: 'Created and maintained a custom sales force on-demand material system.'
        });
        this.projects.push({
            title: 'Slingshot',
            frontBody: 'frontbody',
            backBody: 'backbody',
            image: 'assets/webstack-projects/medium/webstack-project-slingshot.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-slingshot.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'https://slingshot.polaris.com/en-us/',
            target: '_blank',
            role: 'Full Stack - .NET',
            tech: ['KnockoutJS', 'Angular JS', 'HTML5', 'CSS3', 'Bootstrap', 'SQL', 'API'],
            details: 'Worked with a small team to create from scratch, a new MVC C# platform with shared code base.'
        });
        this.projects.push({
            title: 'Suburban Extended Stay',
            frontBody: 'frontbody',
            backBody: 'Updated publicly facing website to a responsive design.',
            image: 'assets/webstack-projects/medium/webstack-project-suburban.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-suburban.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'https://www.choicehotels.com/suburban',
            target: '_blank',
            role: 'Full Stack - LAMP',
            tech: ['PHP', 'MySQL', 'CSS2/3', 'JavaScript'],
            details: 'Created and maintained a custom sales force on-demand material system.'
        });
        this.projects.push({
            title: 'Tom\'s Labor Logistics',
            frontBody: 'frontbody',
            backBody: 'Created a custom CMS allowing our client to maintain their website.',
            image: 'assets/webstack-projects/medium/webstack-project-toms-labor.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-toms-labor.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'http://tomslumperservice.com',
            target: '_blank',
            role: 'Full Stack - LAMP',
            tech: ['Zend Framework', 'PHP', 'MySQL', 'CSS2/3', 'JavaScript'],
            details: 'Used Zend Framework, PHP, MySQL, and classic front-end design technology.'
        });
        this.projects.push({
            title: 'United Airlines',
            frontBody: 'frontbody',
            backBody: 'Built internal data migration system to push / pull print production materials.',
            image: 'assets/webstack-projects/medium/webstack-project-united-airlines.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-united-airlines.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'https://www.united.com/ual/en/us',
            target: '_blank',
            role: 'Front-End',
            tech: ['HTML', 'CSS', 'JavaScript'],
            details: 'Created API\'s to pull and reformat data, and API\'s allowing client to get formatted data back.'
        });
        this.projects.push({
            title: 'Victory Motorcycles',
            frontBody: 'frontbody',
            backBody: 'backbody',
            image: 'assets/webstack-projects/medium/webstack-project-victory-motorcycles.jpg',
            largeImage: 'assets/webstack-projects/large/webstack-project-victory-motorcycles.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'http://www.victorymotorcycles.com/en-us',
            target: '_blank',
            role: 'Full Stack - .NET',
            tech: ['KnockoutJS', 'Angular JS', 'HTML5', 'CSS3', 'Bootstrap', 'SQL', 'API'],
            details: 'Worked with a small team to create from scratch, a new MVC C# platform with shared code base.'
        });
        this.projects.push({
            title: 'Best Buy',
            frontBody: 'frontbody',
            backBody: 'Front-end development for Best Buy weekly ad site, high-touch and low-touch ads.',
            image: 'assets/webstack-projects/medium/a-bestbuy.jpg',
            largeImage: 'assets/webstack-projects/large/a-bestbuy.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'https://deals.bestbuy.com',
            target: '_blank',
            role: 'Front-End',
            tech: ['React', 'HTML', 'CSS', 'C#'],
            details: 'Created ReactJS tool to ensure WCAG 2.0, ADA, ACAA, OCR, AODA, and Section 508 compliance.'
        });
        this.projects.push({
            title: '121 Marketing Solutions',
            frontBody: 'frontbody',
            backBody: 'Modernized publicly facing website for marketing purposes.',
            image: 'assets/webstack-projects/medium/a-121msg.jpg',
            largeImage: 'assets/webstack-projects/large/a-121msg.jpg',
            header: '',
            footer: '',
            infoButtonText: viewLiveText,
            infoButtonURL: 'https://www.121msg.com',
            target: '_blank',
            role: 'Full Stack - LAMP',
            tech: ['Zend Framework', 'PHP', 'MySQL', 'CSS2/3', 'JavaScript'],
            details: 'Customized Magento e-commerce platform for 121personalgifts.com.'
        });
        // this.projects.push({
        //     title: 'ClientName',
        //     frontBody: 'frontbody',
        //     backBody: 'backbody',
        //     image: 'assets/webstack-projects/medium/webstack-project-ascend.jpg',
        //     largeImage: 'assets/webstack-projects/large/webstack-project-ascend.jpg',
        //     header: '',
        //     footer: '',
        //     infoButtonText: viewLiveText,
        //     infoButtonURL: 'https://www.choicehotels.com/ascend',
        //     target: '_blank',
        //     role: 'role',
        //     tech: ['tech'],
        //     details: 'details'
        // });

        this.projects = this.shuffle(this.projects);
    }

    getProjects(): Array<object> {
        return this.projects;
    }

    shuffle(array: Array<object>) {
        let currentIndex = array.length;
        let temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      }

    // getRandomQuote(context: RandomQuoteContext): Observable<string> {
    //   // return this.httpClient
    //   //   .cache()
    //   //   .get(routes.quote(context))
    //   //   .pipe(
    //   //     map((body: any) => body.value),
    //   //     catchError(() => of('Error, could not load joke :-('))
    //   //   );
    //   return '';
    // }


}
