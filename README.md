# Reproduction of issue 4650

Link: https://github.com/prisma/prisma/issues/4650
Documentation: https://www.prisma.io/docs/guides/general-guides/database-workflows/cascading-deletes/postgresql#92-validating-cascade

# Problem

Because the relation of CalendarEvent to Calendar is not optional, we can't delete the calendar even if it would cascade delete the events.
