
const otherUser = {
    role: 'NormalUser',
    getRole() {
        console.log(this.role)
        setTimeout(() => {
            console.log(this);
            console.log(this.role)
        }, 2000)

        // legacy...
        const that = this;
        setTimeout(function () {
            console.log(that);
            console.log(that.role)
        }, 2000)
    }
}

otherUser.getRole();

function printMyName ()  {
	return 90;
}

// const printMyName = () => {
// 	return 90;
// }