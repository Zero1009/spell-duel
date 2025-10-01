"use client";
import { Button } from "@/components/Button";
import { Card } from "@/components/ui/card";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { useState, useEffect } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [inputValue, setInputValue] = useState("");
  const [targetSpell, setTargetSpell] = useState("");
  const [isError, setIsError] = useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const spells = ["Spark", "Bolt", "Nova", "Ward", "Barrier", "Bastion"];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = parseInt(e.key);
      if (key >= 1 && key <= 6) {
        e.preventDefault();
        e.stopPropagation();
        const spell = spells[key - 1];
        setTargetSpell(spell);
        setInputValue("");
        setIsError(false);
        setTimeout(() => inputRef.current?.focus(), 10);
      }
    };

    window.addEventListener("keydown", handleKeyPress, true);
    return () => window.removeEventListener("keydown", handleKeyPress, true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!targetSpell) {
      setInputValue(value);
      return;
    }

    // Check if the input matches the target spell so far
    if (targetSpell.toLowerCase().startsWith(value.toLowerCase())) {
      setInputValue(value);
      setIsError(false);

      // Check if typing is complete
      if (value.toLowerCase() === targetSpell.toLowerCase()) {
        // Success! Clear everything
        setTimeout(() => {
          setInputValue("");
          setTargetSpell("");
        }, 200);
      }
    } else {
      // Wrong typing - show error and don't update input
      setIsError(true);
      setTimeout(() => setIsError(false), 500);
    }
  };

  return (
    <main className="container mx-auto p-8">
      <div className="flex justify-end mb-8">
        <Button
          variant="outline"
          size="md"
          onClick={toggleTheme}
          className="relative p-3 hover:bg-accent hover:text-accent-foreground hover:scale-110 hover:shadow-lg active:scale-95 transition-all duration-300"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 ease-in-out dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute inset-0 m-auto h-5 w-5 rotate-90 scale-0 transition-all duration-500 ease-in-out dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Player A</h3>
            <div className="w-32">
              <div className="text-xs text-muted-foreground mb-1 text-right">
                HP: 100/100
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 transition-all"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Card className="p-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">
                  Spark{" "}
                  <span className="text-xs text-muted-foreground">(1)</span>
                </span>
                <span className="px-2 py-1 bg-red-500 text-white text-xs rounded">
                  ATK
                </span>
              </div>
            </Card>
            <Card className="p-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">
                  Bolt{" "}
                  <span className="text-xs text-muted-foreground">(2)</span>
                </span>
                <span className="px-2 py-1 bg-red-500 text-white text-xs rounded">
                  ATK
                </span>
              </div>
            </Card>
            <Card className="p-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">
                  Nova{" "}
                  <span className="text-xs text-muted-foreground">(3)</span>
                </span>
                <span className="px-2 py-1 bg-red-500 text-white text-xs rounded">
                  ATK
                </span>
              </div>
            </Card>
            <Card className="p-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">
                  Ward{" "}
                  <span className="text-xs text-muted-foreground">(4)</span>
                </span>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">
                  DEF
                </span>
              </div>
            </Card>
            <Card className="p-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">
                  Barrier{" "}
                  <span className="text-xs text-muted-foreground">(5)</span>
                </span>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">
                  DEF
                </span>
              </div>
            </Card>
            <Card className="p-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">
                  Bastion{" "}
                  <span className="text-xs text-muted-foreground">(6)</span>
                </span>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">
                  DEF
                </span>
              </div>
            </Card>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium mb-2">typing</label>
            <Card
              className={`p-3 w-full transition-all ${isError ? "ring-2 ring-red-500 animate-pulse bg-red-500/10" : ""}`}
            >
              <div className="relative">
                {!targetSpell && (
                  <div className="absolute inset-0 text-muted-foreground pointer-events-none">
                    Type here...
                  </div>
                )}
                {targetSpell && (
                  <div className="absolute inset-0 text-muted-foreground/50 pointer-events-none">
                    {targetSpell}
                  </div>
                )}
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="w-full bg-transparent outline-none relative z-10"
                />
              </div>
            </Card>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold mb-4">Arena</h3>
          <div className="space-y-3">
            <Card className="p-4 w-full">
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground mb-3">
                  parry window
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">A</span>
                  <span className="text-2xl font-bold">B</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 border-t-2 border-green-500"></div>
                    <span className="px-2 py-1 bg-green-500 text-white text-xs rounded flex items-center gap-1">
                      <span className="font-bold">A</span> 1.0s
                    </span>
                    <div className="flex-1 border-t-2 border-green-500"></div>
                  </div>
                  <div className="h-4"></div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 border-t-2 border-purple-500"></div>
                    <span className="px-2 py-1 bg-purple-500 text-white text-xs rounded flex items-center gap-1">
                      <span className="font-bold">B</span> 0.75s
                    </span>
                    <div className="flex-1 border-t-2 border-purple-500"></div>
                  </div>
                  <div className="h-4"></div>
                </div>
              </div>
            </Card>
            <div className="grid grid-cols-3 gap-3">
              <Card className="p-3 text-center">
                <p className="text-sm text-muted-foreground mb-1">Round</p>
                <p className="text-xl font-bold">1</p>
              </Card>
              <Card className="p-3 text-center">
                <p className="text-sm text-muted-foreground mb-1">APM</p>
                <p className="text-xl font-bold">0</p>
              </Card>
              <Card className="p-3 text-center">
                <p className="text-sm text-muted-foreground mb-1">Accuracy</p>
                <p className="text-xl font-bold">0%</p>
              </Card>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Player B (Bot)</h3>
            <div className="w-32">
              <div className="text-xs text-muted-foreground mb-1 text-right">
                HP: 100/100
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 transition-all"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Card className="p-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Spark</span>
                <span className="px-2 py-1 bg-red-500 text-white text-xs rounded">
                  ATK
                </span>
              </div>
            </Card>
            <Card className="p-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Bolt</span>
                <span className="px-2 py-1 bg-red-500 text-white text-xs rounded">
                  ATK
                </span>
              </div>
            </Card>
            <Card className="p-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Nova</span>
                <span className="px-2 py-1 bg-red-500 text-white text-xs rounded">
                  ATK
                </span>
              </div>
            </Card>
            <Card className="p-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Ward</span>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">
                  DEF
                </span>
              </div>
            </Card>
            <Card className="p-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Barrier</span>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">
                  DEF
                </span>
              </div>
            </Card>
            <Card className="p-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Bastion</span>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">
                  DEF
                </span>
              </div>
            </Card>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium mb-2">typing</label>
            <Card className="p-3 w-full">
              <input
                type="text"
                className="w-full bg-transparent outline-none"
                placeholder="Type here..."
              />
            </Card>
          </div>
        </Card>
      </div>
    </main>
  );
}
