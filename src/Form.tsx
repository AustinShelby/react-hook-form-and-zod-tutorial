import { FC } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Tiers = [
  {
    id: "BRONZE",
    name: "Bronze",
    description: "Get average points",
    price: 0.99,
  },
  {
    id: "SILVER",
    name: "Silver",
    description: "Get extra points",
    price: 4.99,
  },
  {
    id: "GOLD",
    name: "Gold",
    description: "The highest possible tier",
    price: 19.99,
  },
];

const FormSchema = z.object({
  email: z.string().email(),
  accept: z.literal(true, {
    invalid_type_error: "You must accept Terms and Conditions.",
  }),
  tier: z
    .string({ invalid_type_error: "Please select a payment tier." })
    .refine((val) => Tiers.map((tier) => tier.id).includes(val)),
});

type FormSchemaType = z.infer<typeof FormSchema>;

export const Form: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    await new Promise(async (resolve) => {
      await setTimeout(() => {
        resolve(undefined);
      }, 3000);
    });
    window.location.assign("https://www.youtube.com/c/AustinShelby");
  };

  const currentTier = watch("tier");

  return (
    <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block">
          <span className="block">Email</span>
          <input
            type="text"
            disabled={isSubmitting}
            className={`block border text-lg px-4 py-3 mt-2 rounded-lg border-gray-200 focus:bg-white text-gray-900 focus:border-blue-600 focus:ring-0 outline-none w-full ${
              errors.email ? "border-red-600" : ""
            } disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed`}
            {...register("email")}
          />
        </label>
        {errors.email && (
          <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label className="flex items-center">
          <input
            disabled={isSubmitting}
            type="checkbox"
            className="block border text-lg rounded w-6 h-6 border-gray-200 text-blue-600 focus:ring-0 focus:outline-none focus:ring-offset-0 disabled:text-gray-200 disabled:cursor-not-allowed"
            {...register("accept")}
          />
          <span className="block ml-4">I accept the Terms of Service</span>
        </label>
        {errors.accept && (
          <p className="text-sm text-red-600 mt-1">{errors.accept.message}</p>
        )}
      </div>
      <div>
        <p className="block">Payment Tier</p>
        <ul className="space-y-2 mt-2">
          {Tiers.map((tier) => {
            const isActive = currentTier === tier.id;
            return (
              <li
                className={`border rounded-lg ${
                  isActive
                    ? isSubmitting
                      ? "border-gray-200 bg-gray-100 text-gray-500"
                      : "border-blue-200 bg-blue-50 text-blue-900"
                    : "border-gray-200 text-gray-900"
                }`}
                key={tier.id}
              >
                <label
                  className={`flex justify-between px-6 py-4 items-center cursor-pointer`}
                >
                  <div>
                    <p className={`font-medium text-lg`}>{tier.name}</p>
                    <p className={`text-sm opacity-80`}>{tier.description}</p>
                  </div>
                  <div className="flex items-center">
                    <p className={`font-medium mr-4 text-sm`}>
                      {tier.price.toLocaleString("en-US", {
                        currency: "USD",
                        style: "currency",
                      })}
                    </p>
                    <input
                      disabled={isSubmitting}
                      type="radio"
                      className="w-6 h-6 border ring-0 border-gray-200 text-blue-600 disabled:text-gray-300 outline-none focus:ring-0 focus:ring-offset-0 cursor-pointer"
                      {...register("tier")}
                      value={tier.id}
                    />
                  </div>
                </label>
              </li>
            );
          })}
        </ul>
        {errors.tier && (
          <p className="text-sm text-red-600 mt-1">{errors.tier.message}</p>
        )}
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full px-8 py-4 flex items-center justify-center uppercase text-white font-semibold bg-blue-600 rounded-lg disabled:bg-gray-100 disabled:text-gray-400"
      >
        Create account
        {isSubmitting && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 ml-4"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              fill="none"
              className="stroke-current text-gray-400"
              stroke-width="20"
              r="35"
              stroke-dasharray="164.93361431346415 56.97787143782138"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
              ></animateTransform>
            </circle>
          </svg>
        )}
      </button>
    </form>
  );
};
