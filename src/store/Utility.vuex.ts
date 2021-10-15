import { createModule, mutation, action, getter, Module, createProxy } from "vuex-class-component";
const VuexModule = createModule({
    namespaced: "Utility",
    strict: false,
})
export class Utility extends VuexModule {
    permissions = {
        home: {
            name: "home",
            access: true,
            sections: {
                header: { name: "header", access: true },
                content: { name: "content", access: true },
                footer: { name: "footer", access: true }
            }
        },
        user: {
            name: "user",
            access: true,
            sections: {
                header: { name: "header", access: true },
                content: {
                    name: "content", access: true,
                    sections: {
                        name: { name: "name", access: true },
                        email: { name: "email", access: true },
                        phone: { name: "phone", access: true },
                        age: { name: "age", access: true },
                        gender: { name: "gender", access: true },
                        salary: { name: "salary", access: true },
                        relationship: { name: "relationship status", access: true }
                    }
                },
                footer: { name: "footer", access: true }
            }
        },
        transaction: {
            name: "transaction",
            access: true,
            sections: {
                header: { name: "header", access: true },
                content: {
                    name: "content", access: true,
                    sections: {
                        goods: { name: "goods", access: true },
                        services: { name: "services", access: true },
                        inbound: { name: "inbound", access: true },
                        outbound: { name: "outbound", access: true }
                    }
                },
                footer: { name: "footer", access: true }
            }
        }
    }
    @action async fetchData() {
        let id = localStorage.getItem("userId")
        const res = await fetch(`http://localhost:3000/users/${id}`)
        const data = await res.json()
        this.permissions = data.permissions
    }

    @action async toggle() {
        let id = localStorage.getItem("userId")
        const res: any = await fetch(`http://localhost:3000/users/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                permissions: this.permissions
            })
        })
        
    }
   
    @action async setPermissions(data:any){
        this.permissions=data
        this.toggle()
    }
}
