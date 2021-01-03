import React from "react";
import { useParams } from "react-router-dom";

export const HeroProfile = () => {
    const heroId = useParams();
    console.log(heroId)
    return (
        <div>HeroProfile</div>
    )
}