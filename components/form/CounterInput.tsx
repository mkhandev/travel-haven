"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

const CounterInput = ({
  detail,
  defaultValue,
}: {
  detail: string;
  defaultValue?: number;
}) => {
  const [count, setCount] = useState(defaultValue || 0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      return prevCount;
    });
  };

  return (
    <Card className="mb-4">
      <input type="hidden" name={detail} value={count} />

      <CardHeader className="flex flex-col justify-between sm:flex-row gap-y-5">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex flex-col">
            <h2 className="font-medium capitalize">{detail}</h2>
            <p className="text-sm text-muted-foreground">
              Specify the number of {detail}
            </p>
          </div>
          <div className="flex items-center gap-4"></div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            type="button"
            onClick={decreaseCount}
          >
            <LuMinus className="w-5 h-5 text-primary" />
          </Button>

          <span className="w-5 text-xl font-bold text-center">{count}</span>

          <Button
            variant="outline"
            size="icon"
            type="button"
            onClick={increaseCount}
          >
            <LuPlus className="w-5 h-5 text-primary" />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default CounterInput;
