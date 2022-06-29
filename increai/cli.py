import click
from . import server

@click.command()
def main():
    server.main()
    return 0


if __name__ == "__main__":
    sys.exit(main())  