import { z } from "zod";
import {
  zIranMobile,
  zIranNationalCode,
  zIranPhoneDigits,
  zTextNoDigits,
} from "@/features/lib/formZodRules";

export const pilgrimSchema = z.object({
  firstName: zTextNoDigits("نام"),
  lastName: zTextNoDigits("نام خانوادگی"),
  nickName: z.union([
    z.literal(""),
    zTextNoDigits("نام مستعار"),
  ]),
  fatherName: zTextNoDigits("نام پدر"),
  gender: z.enum(["male", "female"]),
  nationality: z.enum(["iranian", "foreign"]),
  nationalCode: zIranNationalCode,
  province: zTextNoDigits("استان محل سکونت"),
  city: zTextNoDigits("شهر محل سکونت"),
  mobile1: zIranMobile,
  mobile2: zIranMobile,
  relativePhone: zIranPhoneDigits,
  bloodType: zTextNoDigits("گروه خونی"),
  diseaseHistory: z.string(),
});

export type PilgrimFormValues = z.infer<typeof pilgrimSchema>;

export function pilgrimRegistrationSchema(pilgrimCount: number) {
  return z.object({
    pilgrims: z
      .array(pilgrimSchema)
      .length(
        pilgrimCount,
        `اطلاعات ${pilgrimCount} زائر را تکمیل کنید`,
      ),
  });
}

export type RegistrationFormValues = z.infer<
  ReturnType<typeof pilgrimRegistrationSchema>
>;

export function emptyPilgrim(): PilgrimFormValues {
  return {
    firstName: "",
    lastName: "",
    nickName: "",
    fatherName: "",
    gender: "male",
    nationality: "iranian",
    nationalCode: "",
    province: "",
    city: "",
    mobile1: "",
    mobile2: "",
    relativePhone: "",
    bloodType: "",
    diseaseHistory: "",
  };
}
