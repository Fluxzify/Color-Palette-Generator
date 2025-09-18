"use client";
import Card from "@/components/Card";
import { ColorData } from "@/types";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Button from "@/components/Button";
import InputField from "@/components/Fieldset";
import * as colorUtils from "@/utils/colorUtils";
import { useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import { PaletteFunction } from "@/types";

export default function Home() {

  const [colorsList, setColorsList] = useState<ColorData[]>([]);

  const [customColor, setCustomColor] = useState('#ff0000');
const [colorCardCounter, setColorCardCounter] = useState("");

  useEffect(() => {
    addColorCards(3);
  }, []);


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

const generatePalette = (paletteFn: PaletteFunction, baseColor?: string) => {
  setColorsList(prevList =>
    prevList.map(color => ({
      ...color,
      colorValue: baseColor ? paletteFn(baseColor) : (paletteFn as () => string)(),
    }))
  );
};
  return (
<div className="flex flex-col items-center min-h-screen px-2 sm:px-4 md:px-8">
<div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center p-4">
        <Button type="btn-soft btn-soft" text="Generate a cool color pallete" onClick={() => generatePalette(colorUtils.coolPalette)} />
        <Button type="btn-soft btn-soft" text="Generate a warm color pallete" onClick={() => generatePalette(colorUtils.warmPalette)} />
        <Button type="btn btn-soft btn-secondary" text="Generate a variety of palettes from a selected color" onClick={() => (document.getElementById('my_modal_5')! as HTMLDialogElement).showModal()}
        />
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Choose a base color for your palette</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
             <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>

          <div className="flex items-center justify-center p-4">
            <HexColorPicker color={customColor} onChange={setCustomColor} />
          </div>

          <div className="modal-action">
            <form method="dialog">
              <div className="flex justify-center pb-4 pr-10">
                <Button type="btn-soft btn-soft w-48  " text="Gradient palette" onClick={() => generatePalette(colorUtils.gradientColor, customColor)} />
                <Button type="btn-soft btn-soft w-48 " text="Complementary palette" onClick={() => generatePalette(colorUtils.complementaryColor, customColor)} />
              </div>


            </form>
          </div>
        </div>
      </dialog>



<div className="w-full flex flex-wrap gap-2 justify-center overflow-y-auto">

        {colorsList.map(color => (
          <Card key={color.id} colorValue={color.colorValue} />
        ))}
      </div>
     <div className="flex flex-col sm:flex-row gap-2 pt-4 w-full max-w-md">
  <InputField
    type="text"
    value={colorCardCounter}
    onChange={setColorCardCounter}
    placeholder="Number of color cards"
    labelText="Enter the number of color cards (1-10)"
  />
  <Button
    type="btn btn-soft btn-primary"
    text="Add more colors!"
    onClick={() => {
      const num = parseInt(colorCardCounter, 10);
      if (isNaN(num) || num < 1 || num > 10) {
        alert("Enter a number between 1 and 10");
        return;
      }
      addColorCards(num);
    }}
  />
</div>
    </div>



  )
};
