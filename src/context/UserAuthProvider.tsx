import React, { createContext, useContext, useEffect, useState } from "react";
import supabase from "../supabase/supabase";
import { User } from "@supabase/supabase-js";

interface IUserAuthContextValues {
    user: User | null;
}

const UserAuthContext = createContext<IUserAuthContextValues | undefined>(
    undefined
);

interface UserAuthProviderProps {
    children: React.ReactNode;
}

const UserAuthProvider = ({ children }: UserAuthProviderProps) => {
    const [user, setUser] = useState<null | User>(null);

    useEffect(() => {
        let { data } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === "SIGNED_OUT") {
                setUser(null);
            } else {
                if (session?.user) {
                    setUser(session.user);
                }
            }
        });

        return () => {
            data.subscription.unsubscribe();
        };
    }, []);

    return (
        <UserAuthContext.Provider value={{ user }}>
            {children}
        </UserAuthContext.Provider>
    );
};

export default UserAuthProvider;

export const useUser = () => {
    const context = useContext(UserAuthContext);

    if (context === undefined) {
        throw new Error("useUser must be used inside the UserAuthProvider");
    }

    return context;
};
