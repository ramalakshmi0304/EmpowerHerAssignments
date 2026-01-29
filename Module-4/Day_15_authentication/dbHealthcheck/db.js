import supabase from "../config/supabase.js";

const checkDbConnection = async () => {
  try {
    const { error } = await supabase
      .from("users")
      .select("id")
      .limit(1);

    if (error) throw error;

    console.log("✅ Database connected successfully");
    return true;

  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    return false;
  }
};

export { checkDbConnection };
