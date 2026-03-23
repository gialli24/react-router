import { Link, NavLink } from "react-router-dom";
import Banner from "./Banner";
import AppLogo from "./AppLogo";
import '../assets/css/Headers.css'
import { main_menu } from '../data/menu.js'
import { user_actions_menu } from '../data/menu.js'
import { useState } from "react";

export default function AppHeader() {

    return (
        <>
            <Banner>Sign up and get 20% off to your list order.</Banner>

            <header id="app-header">
                <div className="app-container">
                    <div className="header-wrapper">
                        <AppLogo />

                        <nav id="main-nav">
                            {
                                main_menu.map(page => (
                                    <NavLink key={page.id} to={page.url} >{page.title}</NavLink>
                                ))
                            }
                        </nav>

                        <nav id="user-actions-nav">
                            {
                                user_actions_menu.map(page => (
                                    <Link key={page.id} to={page.url} ><i className={`bi ${page.icon}`} ></i></Link>
                                ))
                            }
                        </nav>
                    </div>
                </div>
            </header >
        </>
    );
}