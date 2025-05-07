import { createSignal } from "solid-js";
import pb from "../services/pb";

const Login = () => {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");

  async function handleSubmit() {
    await pb.collection("users").authWithPassword(email(), password());
  }

  return (
    <>
      <div class="flex w-full h-full justify-center items-center">
        <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-lg border p-4 gap-4">
          <legend class="fieldset-legend">Login</legend>

          <label class="label">Email</label>
          <input
            type="email"
            class="input w-xs md:w-lg"
            placeholder="Email"
            value={email()}
            onInput={(e) => setEmail(e.currentTarget.value)}
          />

          <label class="label">Password</label>
          <input
            type="password"
            class="input w-xs md:w-lg"
            placeholder="Password"
            value={password()}
            onInput={(e) => setPassword(e.currentTarget.value)}
          />

          <button
            class="btn btn-neutral mt-4"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </button>
        </fieldset>
      </div>
    </>
  );
};

export default Login;
