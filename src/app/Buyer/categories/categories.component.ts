import { Component, OnInit, HostListener } from '@angular/core';
import { CategoriesService } from '../../Services/categories.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {



    constructor(private categoriesService: CategoriesService, private route: Router) {

    }

    piece: string = this.categoriesService.piece;


    disableButton = true;
    phoneScreen: boolean = window.matchMedia('(max-width:768px)').matches;
    motoCategories = this.categoriesService.mockMotoCategories;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const menuButton = document.getElementById('menuButton');
        const y = window.scrollY;
        const whenToShow = screen.height;
        if (y > screen.height - 200) {
            menuButton.style.opacity = '1';
            this.disableButton = false;
        } else {
            menuButton.style.opacity = '0';
            this.disableButton = true;
        }
    }

    openNav() {
        const sideNav = document.getElementById('sidenav');
        sideNav.style.width = '330px';
    }
    closeNav() {
        document.getElementById('sidenav').style.width = '0';
    }
    collapse(index) {
        const categ = document.getElementById('categ' + index);
        if (categ.style.display === 'block') {
            categ.style.display = 'none';
        } else {
            categ.style.display = 'block';
        }
    }

    initFiltre() {
        this.piece = '';
        this.categoriesService.initFiltre();
    }

    ngOnInit() {
    }
}
