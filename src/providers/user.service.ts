import { Injectable } from '@angular/core';
import {  CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import * as firebase from 'firebase';


@Injectable()
export class UserService implements CanActivate {
    userLoggedIn: boolean = false;
    loggedInUser: string;
    authUser: any;
    // const Users: User[] = [
    //   { email: 'stephen.brewster@intudigital.co.uk', password: 'pass123', credits: '15' },
    //   { email: 'oliver@onezeroone.co.uk', password: 'pass123', credits: '10' },
    //   { email: 'Mr. Nice', password: 'pass123', credits: '5' },
    // ];
    
    constructor( private router: Router ) {
        //     firebase.auth().signInWithEmailAndPassword currently not returning Promise
        firebase.initializeApp({
            apiKey: "AIzaSyDrKKb11V0qiBe001dmUOFArtVY6AlbzQU",
            authDomain: "intuslot.firebaseapp.com",
            databaseURL: "https://intuslot.firebaseio.com",
            projectId: "intuslot",
            storageBucket: "intuslot.appspot.com",
            messagingSenderId: "630525417127"
        })
     }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { 
    // canActivate(): boolean { 
        let url: string = state.url;
        return this.verifyLogin(url);
    }   

    verifyLogin(url: string): boolean {
        if (this.userLoggedIn) { return true; }
                
        this.router.navigate(['/login']);
        return false;
    }

    verifyUser() {
        this.authUser = firebase.auth().currentUser;
        // this.authUser = this.currentUser;
        if (this.authUser) {
            // alert('Welcome ${this.authUser.email}');
            this.loggedInUser = this.authUser.email;
            this.userLoggedIn = true;
            this.router.navigate(['/home']);
        }
    }

    login(loginEmail: string, loginPassword: string) {
        firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
            .catch(function(error) {
            // error codes not accessible by documented methods.Research updates
    }

    logout(){
        this.userLoggedIn = false;
        firebase.auth().signOut()
        .then(function() {
            alert(`Logged Out!`);
        }, function(error) {
            alert('${error.message}');
        });
    }

}