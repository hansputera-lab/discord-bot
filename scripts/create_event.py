import sys
from string import Template
from os import getcwd, path

template = Template("""
/** @typedef {import('eris').CommandClient} CommandClient */

/**
 * $event event bot initializer.
 * @param {CommandClient} bot Eris.CommandClient instance.
 * @return {Promise<void>}
 */
export default async function $event(bot) {
    bot.on('$event', async () => {
        // $event codes here...
    });
};
""")

def get_item(arr, index: int):
    try:
        return arr[index]
    except:
        return None

args = sys.argv[1:]

if len(args) < 1:
    print('Invalid args!')
    sys.exit(0)

name = get_item(args, 0).lower()
filePath = path.join(getcwd(), "events", f"{name}_event.js")

if not path.exists(filePath) and path.isdir(path.join(getcwd(), "events")):
    codes = template.safe_substitute(event=name)
    f = open(filePath, "w+")
    f.write(codes)
    f.close()
    print("success")
else:
    print("fail")
