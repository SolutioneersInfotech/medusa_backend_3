export default async (req, res) => {
  try {
    const userService = req.scope.resolve("userService")

    const email = "aryanrathour066@gmail.com"
    const password = "SxHMe24fivJHbj"

    const existing = await userService
      .retrieveByEmail(email)
      .catch(() => null)

    if (existing) {
      return res.status(200).send("✅ Admin already exists")
    }

    await userService.create({
      email,
      password,
      role: "admin",
      first_name: "Aryan",
    })

    return res.status(200).send("✅ Admin created successfully")
  } catch (err) {
    console.error(err)
    return res.status(500).send("❌ Error creating admin")
  }
}
