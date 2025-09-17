"use client";
import Card from "@/components/Card";
import { ColorData } from "@/types";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Button from "@/components/Button";
import InputField from "@/components/Fieldset";
import * as colorUtils from "@/utils/colorUtils";
export default function Home() {

  const [colorsList, setColorsList] = useState<ColorData[]>([]);

  const [color, setColor] = useState('#ff0000');
  const [colorCardCounter, setColorCardCounter] = useState(0);

  const addColorCards = (newValue: number) => {
    if (newValue <= 0 || newValue > 10) return;
    setColorsList(() => {
      const newColors = Array.from({ length: newValue }, () => ({
        id: uuidv4(),
        colorValue: colorUtils.randomColor()
      }));
      return newColors;
    });
  };



  const generatePalette = (palette: string) => {
    switch (palette) {
      case "warm":
        setColorsList(prevList =>
          prevList.map(color => ({
            ...color,
            colorValue: colorUtils.warmPalette() 
          }))
        );
        break;

      case "cool":
        setColorsList(prevList =>
          prevList.map(color => ({
            ...color,
            colorValue: colorUtils.coolPalette() 
          }))
        );
        break;

      default:
        console.warn("Palette type not recognized");
        break;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-row justify center p-4">
        <Button type="btn-soft btn-secondary " text="Generate a warm color pallete!" onClick={() => generatePalette("warm")} />
        <Button type="btn-soft btn-info" text="Generate a cool color pallete!" onClick={() => generatePalette("cool")} />
      </div>
      

      <div className="w-full max-h-100 flex flex-wrap gap-2 justify-center overflow-y-auto " >

        {colorsList.map(color => (
          <Card key={color.id} colorValue={color.colorValue} />
        ))}
      </div>
      <div className="flex flex-col pt-4">
        <InputField
          type="number"
          value={colorCardCounter}
          onChange={setColorCardCounter}
          placeholder="Number of color cards"
          labelText="Enter the number of color cards to generate (Min 1, Max 10)"
          validation={{ required: true, min: 1, max: 10, step: 1 }}
        />

        <Button type="btn-soft btn-primary" text="Add more colors!" onClick={() => addColorCards(colorCardCounter)} />

      </div>
    </div>



  )
};
