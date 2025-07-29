import frappe
from frappe.core.doctype.user.user import STANDARD_USERS
from frappe.utils import validate_email_address

@frappe.whitelist()
def test_email_send(recipient_email="test@example.com"):
    """Test sending a simple email"""
    try:
        frappe.sendmail(
            recipients=[recipient_email],
            subject="Test Email - " + str(frappe.utils.now()),
            message="This is a test email from Happening app to verify email functionality.",
            delayed=False
        )

        return {
            "status": "success",
            "message": f"Test email sent to {recipient_email}"
        }

    except Exception as e:
        return {
            "status": "error",
            "error": str(e)
        }

@frappe.whitelist()
def send_email_simple(subject, message, recipients_string):
    """Simple email sending function"""
    try:
        # Basic validation
        if not subject or not subject.strip():
            return {"status": "error", "message": "يرجى إدخال عنوان الرسالة"}

        if not message or not message.strip():
            return {"status": "error", "message": "يرجى إدخال محتوى الرسالة"}

        if not recipients_string or not recipients_string.strip():
            return {"status": "error", "message": "يرجى إدخال عناوين البريد الإلكتروني"}

        # Parse recipients
        recipients = []
        for email in recipients_string.replace('\n', ',').split(','):
            email = email.strip()
            if email and validate_email_address(email):
                recipients.append(email)

        if not recipients:
            return {"status": "error", "message": "لم يتم العثور على عناوين بريد صالحة"}

        # Send emails
        sent_count = 0
        failed_count = 0

        for recipient in recipients:
            try:
                frappe.sendmail(
                    recipients=[recipient],
                    subject=subject,
                    message=message,
                    delayed=False
                )
                sent_count += 1
            except Exception as e:
                failed_count += 1
                frappe.log_error(f"Failed to send to {recipient}: {str(e)}")

        return {
            "status": "success",
            "message": f"تم إرسال {sent_count} رسالة بنجاح" + (f" وفشل {failed_count}" if failed_count > 0 else ""),
            "sent": sent_count,
            "failed": failed_count
        }

    except Exception as e:
        frappe.log_error(f"Email sending error: {str(e)}")
        return {"status": "error", "message": f"حدث خطأ: {str(e)}"}



        # Get users with specified roles
        recipients = set()

        for role in roles_list:
            try:
                users_with_role = frappe.get_all("Has Role",
                    filters={"role": role},
                    fields=["parent"]
                )

                for entry in users_with_role:
                    try:
                        user_doc = frappe.get_doc("User", entry.parent)
                        if (user_doc.enabled and
                            user_doc.email and
                            user_doc.name not in STANDARD_USERS and
                            validate_email_address(user_doc.email)):
                            recipients.add(user_doc.email)
                    except:
                        continue
            except:
                continue

        if not recipients:
            return {"status": "error", "message": "لم يتم العثور على مستخدمين صالحين"}

        # Send emails
        sent_count = 0
        failed_count = 0

        for recipient in recipients:
            try:
                frappe.sendmail(
                    recipients=[recipient],
                    subject=subject,
                    message=message,
                    delayed=False
                )
                sent_count += 1
            except Exception as e:
                failed_count += 1
                frappe.log_error(f"Failed to send to {recipient}: {str(e)}")

        return {
            "status": "success",
            "message": f"تم إرسال {sent_count} رسالة بنجاح" + (f" وفشل {failed_count}" if failed_count > 0 else ""),
            "sent": sent_count,
            "failed": failed_count
        }

    except Exception as e:
        frappe.log_error(f"Role email sending error: {str(e)}")
        return {"status": "error", "message": f"حدث خطأ: {str(e)}"}